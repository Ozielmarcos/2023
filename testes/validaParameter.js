function ValidParameter(parameter) {
    if (isNaN(parameter)) {
        return false;
    } else {
        return true;
    }
}

exports.ValidParameter = ValidParameter;