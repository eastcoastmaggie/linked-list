const node = () => {
    return {
        data : {
            value : null,
            writable : true,
            configurable : true,
        },
        nextNode : {
            value : null,
            writable : true,
            configurable : true,
        }
    };
};
module.exports = node;