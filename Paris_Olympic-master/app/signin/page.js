export default function SignIn() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/olympics-logo-in-white-92ps4sftjgakuf2f.jpg')",
      }}
    >
      <div className="card w-96 bg-black/70 shadow-2xl rounded-lg overflow-hidden">
        <div className="card-body bg-white/90 rounded-lg p-8">
          <h1 className="card-title text-3xl font-bold text-center text-gray-700 mb-6">
            Sign In
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-2 bg-gray-100 text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
