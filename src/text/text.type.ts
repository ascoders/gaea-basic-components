export class Props {
  public gaeaSetting = {
    key: "gaea-text",
    name: "文字",
    editors: [
      "布局",
      {
        label: "边距",
        type: "box-editor"
      },
      "展示",
      {
        field: "text",
        label: "文案",
        type: "string"
      }
    ]
  }

  public style: React.CSSProperties = {
    color: "#333",
    fontSize: 14
  }

  public text: string = "文字"
}

export class State { }
