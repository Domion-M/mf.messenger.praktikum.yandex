import { UsersService } from "../services/index.js";
export class Store {
    constructor() {
        this.userData = {};
    }
    getData() {
        UsersService.getAuthUser().then((res) => {
            const data = JSON.parse(res.response);
            this.userData = data;
        });
    }
}
;
//# sourceMappingURL=index.js.map