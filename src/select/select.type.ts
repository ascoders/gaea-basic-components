export class Props {
  public gaeaSetting = {
    key: "gaea-select",
    name: "下拉选择",
    editor: [
      "基本",
      {
        field: "defaultValue",
        label: "默认值",
        type: "text"
      },
      {
        field: "options",
        label: "选项",
        type: "array",
        arrayType: {
          value: "string",
          name: "string"
        }
      }
    ]
  }

  public style: React.CSSProperties = {
    color: "#333",
    fontSize: 14
  }

  public defaultValue: string = null
  public options: IOption[] = []
}

export class State { }

export interface IOption {
  value: string
  name: string
}