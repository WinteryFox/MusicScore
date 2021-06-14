import {Component, createRef} from "react";
import {SVG} from "@svgdotjs/svg.js";
import {Typr, TyprU} from "typr-ts";
import leland from "./assets/fonts/Leland.otf";

export default class Score extends Component {
    private barLines = createRef<HTMLDivElement>()

    componentDidMount() {
        if (!this.barLines.current)
            return;

        const font = Typr.parse(leland);
        const glyph = TyprU.glyphToPath(font, "\uE014")
        console.log(font);
        console.log(glyph);

        const draw = SVG().addTo(this.barLines.current)
            .width(612)
            .height(792);
        draw.path(glyph);
        /*let lines = "";
        for (let x = 0; x < 5; x++)
            for (let y = 0; y < 5; y++)
                lines += `M0 ${x * 56 + y * 5} H612`;
        draw.path(lines).attr([
            {"stroke": "#000"},
            {"stroke-width": ".4"},
            {"stroke-linejoin": "bevel"},
            {"fill": "none"}
        ]);*/
        draw.text("\uE050")
    }

    render() {
        return (
            <div ref={this.barLines}/>
        );
    }
}