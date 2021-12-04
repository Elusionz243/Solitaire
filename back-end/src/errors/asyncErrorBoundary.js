const asyncErrorBoundary = (delegate, defaultStatus) => {
  return async (request, response, next) => {
    try {
      await Promise.resolve();
      return await delegate(request, response, next);
    } catch ({ status = defaultStatus, message = error }) {
      next({
        status,
        message
      });
    }
  }
}

module.exports = asyncErrorBoundary;
