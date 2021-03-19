import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import sinon from "sinon";
import App from "@/App.vue";
import Map from "@/components/Map.vue";
import Search from "@/components/Search.vue";
import Result from "@/components/Result.vue";

describe("Vue unit test", () => {
  // describe("HelloWorld.vue", () => {
  //   it("renders props.msg when passed", () => {
  //     const msg = "new message";
  //     const wrapper = shallowMount(HelloWorld, {
  //       propsData: { msg },
  //     });
  //     expect(wrapper.text()).to.include(msg);
  //   });
  // });

  describe("Structure of components", () => {
    it("App should contain a Map component", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.findComponent(Map).exists()).to.equal(true);
    });
    it("App should contain a Search component", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.findComponent(Search).exists()).to.equal(true);
    });
    it("App should contain a Result component", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.findComponent(Result).exists()).to.equal(true);
    });
  });

  describe("Should contain required clickflow", () => {
    it.skip("should switch to Result view when clicked search (test not working)", async () => {
      sinon.stub(window, "fetch");
      const wrapper = mount(App);
      await wrapper
        .findComponent(Search)
        .find("button")
        .trigger("click");
      expect(wrapper.findComponent(Result).exists()).to.equal(true);
    });
  });
});
