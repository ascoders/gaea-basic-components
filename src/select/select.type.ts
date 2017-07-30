export class Props {
  public gaeaSetting = {
    key: "gaea-select",
    name: "下拉选择",
    editors: [
      "布局",
      {
        label: "边距",
        type: "box-editor"
      },
      "基本",
      {
        field: "defaultValue",
        label: "默认值",
        type: "string"
      },
      {
        field: "options",
        label: "选项",
        type: "array",
        editors: [{
          field: "value",
          type: "string",
          label: "值"
        }, {
          field: "name",
          type: "string",
          label: "选项名称"
        }]
      }
    ],
    events: [{
      name: "选择时",
      field: "onChange",
      data: [{
        name: "选中值"
      }]
    }]
  }

  public style: React.CSSProperties = {
    color: "#333",
    fontSize: 14
  }

  public defaultValue: string = null
  public options: IOption[] = []

  public onChange = (value?: string) => { }
}

export class State { }

export interface IOption {
  value: string
  name: string
}