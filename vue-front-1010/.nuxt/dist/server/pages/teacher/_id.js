exports.ids = [6];
exports.modules = {

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = ({
  //分页查询
  getTeacherList(page, limit) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    });
  },

  getTeacherInfo(teacherId) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    });
  }

});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/teacher/_id.vue?vue&type=template&id=2e0e9750&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "bg-fa of",
    attrs: {
      "id": "aCoursesList"
    }
  }, [_vm._ssrNode("<section class=\"container\"><header class=\"comm-title\"><h2 class=\"fl tac\"><span class=\"c-333\">老师信息介绍</span></h2></header> <div class=\"t-infor-wrap\"><section class=\"fl t-infor-box c-desc-content\"><div class=\"mt20 ml20\"><section class=\"t-infor-pic\"><img" + _vm._ssrAttr("src", _vm.teacher.avatar) + "></section> <h3 class=\"hLh30\"><span class=\"fsize24 c-333\">" + _vm._ssrEscape(_vm._s(_vm.teacher.name) + " \n                            " + _vm._s(_vm.teacher === 1 ? '高级讲师' : '首席讲师') + "\n                        ") + "</span></h3> <section class=\"mt10\"><span class=\"t-tag-bg\">" + _vm._ssrEscape(_vm._s(_vm.teacher.career)) + "</span></section> <section class=\"t-infor-txt\"><p class=\"mt20\">" + _vm._ssrEscape("\n                            " + _vm._s(_vm.teacher.intro) + "\n                        ") + "</p></section> <div class=\"clear\"></div></div></section> <div class=\"clear\"></div></div> <section class=\"mt30\"><div><header class=\"comm-title all-teacher-title c-course-content\"><h2 class=\"fl tac\"><span class=\"c-333\">主讲课程</span></h2> <section class=\"c-tab-title\"><a href=\"javascript: void(0)\"> </a></section></header> " + (_vm.courseList.length == 0 ? "<section class=\"no-data-wrap\"><em class=\"icon30 no-data-ico\"> </em> <span class=\"c-666 fsize14 ml10 vam\">" + _vm._ssrEscape(_vm._s(_vm.teacher.name) + "老师的课程还没上传,nniioo正在整理上传中...") + "</span></section>" : "<!---->") + " <article class=\"comm-course-list\"><ul class=\"of\">" + _vm._ssrList(_vm.courseList, function (course) {
    return "<li><div class=\"cc-l-wrap\"><section class=\"course-img\"><img" + _vm._ssrAttr("src", course.cover) + " class=\"img-responsive\"> <div class=\"cc-mask\"><a href=\"#\" title=\"开始学习\" target=\"_blank\" class=\"comm-btn c-btn-1\">开始学习</a></div></section> <h3 class=\"hLh30 txtOf mt10\"><a href=\"#\"" + _vm._ssrAttr("title", course.title) + " target=\"_blank\" class=\"course-title fsize18 c-333\">" + _vm._ssrEscape(_vm._s(course.title)) + "</a></h3></div></li>";
  }) + "</ul> <div class=\"clear\"></div></article></div></section></section>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/teacher/_id.vue?vue&type=template&id=2e0e9750&

// EXTERNAL MODULE: ./api/teacher.js
var teacher = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/teacher/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  // this.$router.params.id   等价   params.id
  asyncData({
    params,
    error
  }) {
    return teacher["a" /* default */].getTeacherInfo(params.id).then(response => {
      return {
        teacher: response.data.data.teacher,
        courseList: response.data.data.courseList
      };
    });
  }

});
// CONCATENATED MODULE: ./pages/teacher/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var teacher_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/teacher/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  teacher_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4df21c8c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map