[
  {
    type: "button"
    iconset: "ion"
    icon: "ios-copy"
    callback: "tree-view:toggle"
    tooltip: "Toggle Project Tree"
  }
  {
    type: "button"
    iconset: "fa"
    icon: "columns"
    tooltip: "Split Screen"
    callback: ["pane:split-right"]
  }
  {
    type: "button"
    iconset: "devicon"
    icon: "git-plain"
    callback: "git-plus:menu"
    tooltip: "Git"
    style:
      color: "#0198E1"
  }
  {
    type: "url"
    iconset: "ion"
    icon: "bug"
    url: "http://localhost:8000"
    tooltip: "Debug Django Project"
    show: [ "Python", "HTML", "JavaScript" ]
  }
]
