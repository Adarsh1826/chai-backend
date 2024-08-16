// higher order function which accepts function as argument
const asyncHandler = (fn) => async(req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            res.status(err.code || 500).json({
                success:false,
                message:err.message
            })
        }
}

export { asyncHandler }