// app.component.ts
import { Component } from '@angular/core'; //从Angular基础包@Angular/core中引入组件模块

// 通过@Component装饰器来告诉Angular怎么创建这个组件
@Component({
  selector: 'hello-world', // 定义该组件的DOM元素名称
  templateUrl: 'src/app.component.html' // 定义组件引入所需的模版
})

export class AppComponent {} // 定义组件类并对外输出该类，这样其他文件就可以通过这个类名引用本组件