# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Buổi 3: State (trạng thái của ứng dụng) + props nâng cao + thực hành tạo các component dùng chung với việc ứng dụng state và props

* 1, State là gì
- Nó là trạng thái của ứng dụng: 
- Để quản lí state, ta dùng đến hook (custom function của react): useState()

- Vị trí import, khai báo ngay trên dòng | import react, {useState} from 'react' |
- Cú pháp và cách dùng: const [stateName, setStateName] = useState(initialState)
 * Chú ý: initialState có thể nhận bất kì kiểu dữ liệu nào mà JS đang có, stateName là tên của trạng thái cần quản lí, setStateName là một hàm để cập nhật lại dữ liệu cho stateName mà mình đã khai báo ở trên

 useEffect
 axios method:
 - get: lay
 - put: cap nhat
 - post: sua
 - delete: xoa

 2TH cua effect:
 - TH1: dep array la mot mang rong -> callback trong useEffect chi chay mot lan duy nhat
 - TH2: dep array co dieu kien -> callback chay lai khi thay doi gia tri