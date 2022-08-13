const password = (value, helper) => {
    if(!value.match(/\d/) || !value.match(/a-zA-Z/)){
        return helper.message(
            "password must contain ai least one number and one letter "
        )
    }
    return value;
};
module.exports = {
    password,
}