// Filter-as-you-type over the rendered README list. No index, no dependencies.
(() => {
  const input = document.getElementById("q");
  const count = document.getElementById("count");
  const main = document.getElementById("list");
  if (!input || !main) return;
  input.closest(".search").hidden = false;

  // Group the flat README markup into sections: h2 -> (parts, h3 blocks -> parts).
  const sections = [];
  let sec = null, blk = null;
  for (const el of main.children) {
    if (el.tagName === "H2") { sec = { head: el, parts: [], blocks: [] }; sections.push(sec); blk = null; }
    else if (!sec) continue;
    else if (el.tagName === "H3") { blk = { head: el, parts: [] }; sec.blocks.push(blk); }
    else (blk ? blk.parts : sec.parts).push(el);
  }
  const listed = sections.filter((s) => s.head.id !== "contents" && s.head.id !== "license");
  const others = sections.filter((s) => !listed.includes(s));
  const items = listed.flatMap((s) => [...s.parts, ...s.blocks.flatMap((b) => b.parts)])
    .filter((el) => el.tagName === "UL").flatMap((ul) => [...ul.children]);
  items.forEach((li) => { li.dataset.text = li.textContent.toLowerCase(); });
  const tocLink = (id) => document.querySelector(`.toc a[href="#${CSS.escape(id)}"]`)?.closest("li");

  const show = (parts, q) => {
    let any = false;
    for (const el of parts) {
      if (el.tagName === "UL") {
        let n = 0;
        for (const li of el.children) { const m = !q || li.dataset.text.includes(q); li.hidden = !m; if (m) n++; }
        el.hidden = n === 0;
        any = any || n > 0;
      } else {
        el.hidden = Boolean(q);
      }
    }
    return any;
  };

  const apply = () => {
    const q = input.value.trim().toLowerCase();
    for (const s of listed) {
      let any = show(s.parts, q);
      for (const b of s.blocks) {
        const v = show(b.parts, q);
        b.head.hidden = !v;
        const t = tocLink(b.head.id); if (t) t.hidden = !v;
        any = any || v;
      }
      s.head.hidden = !any;
      const t = tocLink(s.head.id); if (t) t.hidden = !any;
    }
    for (const s of others) {
      for (const el of [s.head, ...s.parts]) el.hidden = Boolean(q);
    }
    const n = items.filter((li) => !li.hidden).length;
    count.textContent = q ? `${n} of ${items.length}` : `${items.length} entries`;
  };

  // Shareable filter: ?q=term
  const params = new URLSearchParams(location.search);
  if (params.has("q")) input.value = params.get("q");
  const sync = () => {
    const url = new URL(location.href);
    if (input.value.trim()) url.searchParams.set("q", input.value.trim()); else url.searchParams.delete("q");
    history.replaceState(null, "", url);
  };

  input.addEventListener("input", () => { apply(); sync(); });
  input.addEventListener("keydown", (e) => { if (e.key === "Escape") { input.value = ""; apply(); sync(); } });
  apply();
})();
