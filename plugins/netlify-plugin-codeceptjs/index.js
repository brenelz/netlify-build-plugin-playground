module.exports = {
  onPostBuild: async ({ inputs: { cmd }, utils: { run, build } }) => {
    run.command(cmd);
    try {
      await run.command(`npx codeceptjs run --steps`);
    } catch {
      return build.failBuild("end to end tests failed");
    }
  },
};
