const DEV_MODE = 1
const PRODUCT_MODE = 2
const CURRENT_MODE = PRODUCT_MODE

class Config {
    constructor() {
        this.config = {}
        
        if (CURRENT_MODE === DEV_MODE) {
            this.SERVICE_API_URL = "http://127.0.0.1:8000/api"
            this.BACKEND_FILE_URL = ""
        } else if (CURRENT_MODE === PRODUCT_MODE) {
            this.SERVICE_API_URL = "https://hexafinity.com/api"
            this.BACKEND_FILE_URL = ""
        } else {
            
        }
    }
}

export default (new Config());