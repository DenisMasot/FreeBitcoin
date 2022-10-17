import { mount } from "@vue/test-utils";
import Header from "../../src/components/HeaderComponents.vue";

describe("Header", () => {
  it("check if prop msg match", () => {
    const msg = "I'm a example component with composition API";
    const wrapper = mount(Header, { props: { msg } });
    expect(wrapper.text()).toMatch(msg);
  });
});
