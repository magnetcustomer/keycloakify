import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from "../../tools/clsx";
import { useGetClassName } from "../../account/lib/useGetClassName";
export default function Sessions(props) {
    var _a;
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });
    console.log({ kcContext });
    const { url, stateChecker, sessions } = kcContext;
    const { msg } = i18n;
    console.log({ sdf: (_a = kcContext.locale) === null || _a === void 0 ? void 0 : _a.supported });
    console.log({ asdf: "asdf" });
    return (_jsxs(Template, Object.assign({}, { kcContext, i18n, doUseDefaultCss, classes }, { active: "sessions" }, { children: [_jsx("div", Object.assign({ className: getClassName("kcContentWrapperClass") }, { children: _jsx("div", Object.assign({ className: "col-md-10" }, { children: _jsx("h2", { children: msg("sessionsHtmlTitle") }) })) })), _jsxs("table", Object.assign({ className: "table table-striped table-bordered" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: msg("ip") }), _jsx("th", { children: msg("started") }), _jsx("th", { children: msg("lastAccess") }), _jsx("th", { children: msg("expires") }), _jsx("th", { children: msg("clients") })] }) }), _jsx("tbody", Object.assign({ role: "rowgroup" }, { children: sessions.sessions.map((session, index) => (_jsxs("tr", { children: [_jsx("td", { children: session.ipAddress }), _jsx("td", { children: session === null || session === void 0 ? void 0 : session.started }), _jsx("td", { children: session === null || session === void 0 ? void 0 : session.lastAccess }), _jsx("td", { children: session === null || session === void 0 ? void 0 : session.expires }), _jsx("td", { children: session.clients.map((client, clientIndex) => (_jsxs("div", { children: [client, _jsx("br", {})] }, clientIndex))) })] }, index))) }))] })), _jsxs("form", Object.assign({ action: url.sessionsUrl, method: "post" }, { children: [_jsx("input", { type: "hidden", id: "stateChecker", name: "stateChecker", value: stateChecker }), _jsx("button", Object.assign({ id: "logout-all-sessions", type: "submit", className: clsx(getClassName("kcButtonDefaultClass"), getClassName("kcButtonClass")) }, { children: msg("doLogOutAllSessions") }))] }))] })));
}
//# sourceMappingURL=Sessions.js.map