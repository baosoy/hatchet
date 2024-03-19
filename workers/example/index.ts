import Hatchet, { Workflow } from "@hatchet-dev/typescript-sdk";

const hatchet = Hatchet.init();

const workflow: Workflow = {
  id: "first-typescript-workflow",
  description: "This is my first workflow",
  on: {
    event: "user:create",
  },
  steps: [
    {
      name: "step1",
      run: async (ctx) => {
        console.log(
          "starting step1 with the following input",
          ctx.workflowInput()
        );

        return {
          result: "success!",
        };
      },
    },
  ],
};

hatchet.run(workflow);
