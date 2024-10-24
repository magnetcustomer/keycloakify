import { useReducer, useEffect } from "react";
import { headInsert } from "../tools/headInsert";
import { clsx } from "../tools/clsx";
export function usePrepareTemplate(params) {
    const { doFetchDefaultThemeResources, styles = [], scripts = [], htmlClassName, bodyClassName } = params;
    const [isReady, setReady] = useReducer(() => true, !doFetchDefaultThemeResources);
    useEffect(() => {
        if (!doFetchDefaultThemeResources) {
            return;
        }
        let isUnmounted = false;
        const removeArray = [];
        (async () => {
            for (const style of [...styles].reverse()) {
                const { prLoaded, remove } = headInsert({
                    "type": "css",
                    "position": "prepend",
                    "href": style
                });
                removeArray.push(remove);
                // TODO: Find a way to do that in parallel (without breaking the order)
                await prLoaded;
                if (isUnmounted) {
                    return;
                }
            }
            setReady();
        })();
        scripts.forEach(src => {
            const { remove } = headInsert({
                "type": "javascript",
                src
            });
            removeArray.push(remove);
        });
        return () => {
            isUnmounted = true;
            removeArray.forEach(remove => remove());
        };
    }, []);
    useSetClassName({
        "target": "html",
        "className": htmlClassName
    });
    useSetClassName({
        "target": "body",
        "className": bodyClassName
    });
    return { isReady };
}
function useSetClassName(params) {
    const { target, className } = params;
    useEffect(() => {
        if (className === undefined) {
            return;
        }
        const htmlClassList = document.getElementsByTagName(target)[0].classList;
        const tokens = clsx(className).split(" ");
        htmlClassList.add(...tokens);
        return () => {
            htmlClassList.remove(...tokens);
        };
    }, [className]);
}
//# sourceMappingURL=usePrepareTemplate.js.map