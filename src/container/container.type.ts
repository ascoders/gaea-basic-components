export class Props {
  public gaeaSetting = {
    key: "gaea-container",
    name: "容器",
    isContainer: true,
    editors: [
      "基本",
      {
        field: "style.backgroundColor",
        label: "背景颜色",
        type: "color"
      },
      {
        field: "style.opacity",
        label: "透明度",
        type: "number",
        data: {
          useSlider: true,
          sliderStep: 1,
          inputRange: [0, 100],
          outputRange: [0, 1]
        }
      }
    ]
  }

  public style: React.CSSProperties = {
    display: "flex",
    minWidth: 100,
    minHeight: 100
  }
}

export class State { }
