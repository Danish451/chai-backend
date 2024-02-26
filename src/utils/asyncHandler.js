const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=> next(err))
    }
}
export {asyncHandler}


// using try-catch
/*
const asyncHandler = (fn) => {
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(err.code || 500).json({          // if user pass then err.code otherwise 500 as usual
                success: false
            })     
                
        }
    }
}
*/