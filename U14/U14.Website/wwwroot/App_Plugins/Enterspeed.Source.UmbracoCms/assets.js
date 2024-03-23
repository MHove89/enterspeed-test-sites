const a = [
  {
    type: "dashboard",
    name: "Enterspeed.Dashboard",
    alias: "enterspeed_dashboard",
    elementName: "enterspeed-dashboard",
    js: () => import("./dashboard.element-B0pIrzeF.js"),
    weight: -10,
    meta: {
      label: "Enterspeed.Dashboard",
      pathname: "Enterspeed.Dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], s = [...a], t = [
  ...s
], o = (n, e) => {
  e.registerMany(t);
};
export {
  o as onInit
};
//# sourceMappingURL=assets.js.map
