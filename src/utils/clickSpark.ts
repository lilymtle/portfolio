class ClickSpark extends HTMLElement {
    private _parent: HTMLElement | null = null;
    private svg: SVGSVGElement | null = null;
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot!.innerHTML = this.createSpark();
      this.svg = this.shadowRoot!.querySelector("svg");
      this._parent = this.parentNode as HTMLElement;
      this._parent.addEventListener("click", this);
    }
  
    disconnectedCallback() {
      if (this._parent) {
        this._parent.removeEventListener("click", this);
        this._parent = null;
      }
    }
  
    handleEvent(e: MouseEvent) {
      if (this._parent) {
        this.setSparkPosition(e);
        this.animateSpark();
      }
    }
  
    private animateSpark() {
      if (!this.svg) return;
  
      const sparks = Array.from(this.svg.children) as SVGLineElement[];
      const size = parseInt(sparks[0].getAttribute("y1") || "0");
      const offset = `${size / 2}px`;
  
      const keyframes = (i: number) => {
        const deg = `calc(${i} * (360deg / ${sparks.length}))`;
  
        return [
          {
            strokeDashoffset: size * 3,
            transform: `rotate(${deg}) translateY(${offset})`,
          },
          {
            strokeDashoffset: size,
            transform: `rotate(${deg}) translateY(0)`,
          },
        ];
      };
  
      const options: KeyframeAnimationOptions = {
        duration: 660,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        fill: "forwards",
      };
  
      sparks.forEach((spark, i) => {
        spark.animate(keyframes(i), options);
      });
    }
  
    private setSparkPosition(e: MouseEvent) {
      if (this.style) {
        this.style.left = `${e.pageX - this.clientWidth / 2}px`;
        this.style.top = `${e.pageY - this.clientHeight / 2}px`;
      }
    }
  
    private createSpark() {
      return `
        <style>
          :host {
            position: absolute;
            pointer-events: none;
          }
        </style>
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="var(--click-spark-color, currentcolor)" transform="rotate(-20)">
          ${Array.from(
            { length: 8 },
            (_) =>
              `<line x1="50" y1="30" x2="50" y2="4" stroke-dasharray="30" stroke-dashoffset="30" style="transform-origin: center" />`
          ).join("")}
        </svg>
      `;
    }
  }
  
  customElements.define("click-spark", ClickSpark);
  
  export default ClickSpark;  