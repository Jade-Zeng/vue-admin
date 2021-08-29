// 接口类型声明

export interface App {
	count: 0;
}

// 布局配置
export interface ThemeConfigState {
	globalTitle:string;
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
	themeConfig: ThemeConfigState;
  app:App;
}
