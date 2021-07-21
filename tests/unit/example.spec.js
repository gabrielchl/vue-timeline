import { shallowMount } from "@vue/test-utils";
import VueTimeline from "@/components/VueTimeline.vue";

describe("VueTimeline.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(VueTimeline, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
