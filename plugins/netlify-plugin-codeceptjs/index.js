module.exports = {
  onPostBuild: async ({
    inputs: { serverStartupCmd },
    utils: { run, build },
  }) => {
    run.command(serverStartupCmd);
    try {
      await run.command(`npx codeceptjs run --steps`);
    } catch {
      return build.failBuild("end to end tests failed");
    }
  },
};
