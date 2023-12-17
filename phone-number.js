function telephoneCheck(str) {
    const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    return phonePattern.test(str);
}
