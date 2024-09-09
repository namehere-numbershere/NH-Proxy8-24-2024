import {discord } from "../settings";
import { Obfuscated } from "../util/obfuscate";

function Footer() {
    return (
        <footer class="footer px-7 mt-auto mb-5 select-none flex items-center justify-between">
            <div>
                <Obfuscated>Made By: Nameherenumbershere</Obfuscated>
            </div>
            <div class="flex items-center justify-center gap-1.5">
                
                <span>/</span>
                
            </div>
        </footer>
    )
}

export { Footer };
