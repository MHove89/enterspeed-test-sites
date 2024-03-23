import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
import { LitElement as d, html as p, css as n, property as c, customElement as m } from "@umbraco-cms/backoffice/external/lit";
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, i = (u, l, a, r) => {
  for (var e = r > 1 ? void 0 : r ? f(l, a) : l, s = u.length - 1, o; s >= 0; s--)
    (o = u[s]) && (e = (r ? o(l, a, e) : o(e)) || e);
  return r && e && h(l, a, e), e;
};
let t = class extends b(d) {
  constructor() {
    super(), this.title = "Enterspeed.Source.UmbracoCms dashboard";
  }
  render() {
    return p`
            <uui-box headline="${this.title}">
                dashboard content goes here
            </uui-box>
            <uui-table aria-label="Example table" aria-describedby="#some-element-id">
                <uui-table-row>
                    <uui-table-cell>Cell 1</uui-table-cell>
                    <uui-table-cell>Cell 2</uui-table-cell>
                </uui-table-row>
            </uui-table>
        `;
  }
};
t.styles = n`
        :host {
            display: block;
            padding: 20px;
        }
    `;
i([
  c()
], t.prototype, "title", 2);
t = i([
  m("enterspeed-dashboard")
], t);
const v = t;
export {
  v as default,
  t as enterspeed_dashboard
};
//# sourceMappingURL=dashboard.element-B0pIrzeF.js.map
