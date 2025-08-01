declare module "*.svg?react" {
    import React = require("react");
    // import * as React from "react";
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
