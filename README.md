# 高速磁浮导向状态诊断模块（二位端）

## 配置

开发调试 或打包 之前，请先新建 /.env.local 文件，然后配置如下参数：

```
VITE_WEBSOCKET_URL=ws://x.x.x.x:port
```

## 打包

运行 `npm run build` 或 `yarn build` 或 `pnpm build`，生成 dist 目录

## 部署运行

将 dist 目录拷贝到服务器上，然后运行 pm2 相关的命令，如：

```bash
pm2 serve dist --name guidance-status-diagnosis-2 --port 12000
```