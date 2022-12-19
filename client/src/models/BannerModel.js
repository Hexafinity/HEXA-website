class BannerModel {
    id = null;
    banner_name = '';
    banner_image = '';
    banner_order = 0;
    created_at = new Date();

    constructor(props) {
        if (!props) return
        this.id = +props.id || null;
        this.banner_name = props.banner_name || '';
        this.banner_image = props.banner_image || '';
        this.banner_order = props.banner_order || 0;
        this.created_at = props.created_at || new Date().toString();
    }

}

export default BannerModel;