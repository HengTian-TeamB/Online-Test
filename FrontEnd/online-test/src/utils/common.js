/**
 * 公共的工具函数
 */

// 手机号的正则校验
export const phoneNumReg = (_this, phoneNum) => {
    if (phoneNum === "") {
        // _this.$toasted.error("手机号不可为空").goAway(1000);
        _this.$Message.error("手机号不可为空")
        return false;
    } else if (phoneNum !== "") {
        let reg = /^1[3456789]\d{9}$/;
        if (!reg.test(phoneNum)) {
            // _this.$toasted.error("请输入有效的手机号码").goAway(1000);
            _this.$Message.error("请输入有效的手机号码")
            return false;
        } else {
            return true;
        }
    }
}