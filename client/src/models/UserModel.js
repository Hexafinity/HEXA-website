class UserModel {
    id = null;
    user_name = '';
    user_sns = '';
    user_email = '';
    is_registered_elder = 0;
    is_free = 0;
    phone = '';
    out_school = '';
    in_school = '';
    college = '';
    department = '';
    enter_date = '';
    major = '';
    verify_image = '';
    created_at = new Date().toString();
    updated_at = new Date().toString();

    constructor(props) {
        if (!props) return
        this.id = +props.id || null;
        this.user_name = props.user_name || '';
        this.user_sns = props.user_sns || '';
        this.user_email = props.user_email || '';
        this.is_registered_elder = +props.is_registered_elder || 0;
        this.is_free = props.is_free || 0;
        this.phone = props.phone || '';
        this.out_school = props.out_school || '';
        this.in_school = props.in_school || '';
        this.college = props.college || '';
        this.department = props.department || '';
        this.enter_date = props.enter_date || '';
        this.major = props.major || '';
        this.verify_image = props.verify_image || '';
        this.created_at = props.created_at || new Date().toString();
        this.updated_at = props.updated_at || new Date().toString();
    }
}

export default UserModel;