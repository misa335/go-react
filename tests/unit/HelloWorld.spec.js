import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";
import Map from "@/components/Map.vue";

describe("Vue unit test", () => {
  describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
      const msg = "new message";
      const wrapper = shallowMount(HelloWorld, {
        propsData: { msg },
      });
      expect(wrapper.text()).to.include(msg);
    });
  });

  describe("Structure of components", () => {
    it("App should contain a Map component", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.contains(Map)).to.equal(true);
    });
    it("App should contain a Search component", () => {
      //const wrapper = shallowMount(App);
      //expect(wrapper.contains(Search)).to.equal(true);
    });
    it("App should contain a Result component", () => {
      //const wrapper = shallowMount(App);
      //expect(wrapper.contains(Result)).to.equal(true);
    });
  });

  describe("Should contain required clickflow", () => {
    it("should switch to Result view when clicked search", async () => {
      //const wrapper = shallowMount(Search);
      //await wrapper.find("button.search").trigger("click");
    });
  });
});
