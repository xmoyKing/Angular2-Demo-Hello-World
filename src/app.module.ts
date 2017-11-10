// app.module.ts
import { NgModule } from '@angular/core'; // NgModule用于定义模块的装饰器
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 

@NgModule({ 
  declarations: [AppComponent], // declarations 导入模块依赖的组件、指令等
  imports: [BrowserModule], // imports导入其他所需的模块，在imports属性中配置，作为公用模块供全局调用。几乎每个应用都需要导入BrowserModule模块、其内注册了关键的Provider等通用指令
  bootstrap: [AppComponent] // bootstrap标记出引导组件，在Angular启动应用时，将被标记的组件渲染到模版中
})

export class AppModule{}