import { request } from "@/api/service";
import { BUTTON_STATUS_NUMBER } from "@/config/button";
import { urlPrefix as bookPrefix } from "./api";


export const crudOptions = vm => {
    return {
        pageOptions: {
            compact: true
        },
        options: {
            tableType: "vxe-table",
            rowKey: true, // 必须设置，true or false
            rowId: "id",
            height: "100%", // 表格高度100%, 使用toolbar必须设置
            highlightCurrentRow: false
        },
        rowHandle: {
            width: 140,
            view: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Retrieve");
                }
            },
            edit: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Update");
                }
            },
            remove: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Delete");
                }
            }
        },
        indexRow: {
            // 或者直接传true,不显示title，不居中
            title: "序号",
            align: "center",
            width: 100
        },
        viewOptions: {
            componentType: "form"
        },
        formOptions: {
            defaultSpan: 24, // 默认的表单 span
            width: "35%"
        },
        columns: [
            {
                title: "ID",
                key: "id",
                show: false,
                disabled: true,
                width: 90,
                form: {
                    disabled: true
                }
            },
            {
                title: "样本号",
                key: "sample_no",
                sortable: true,
                treeNode: true,

                type: "input",
                form: {
                    rules: [
                        // 表单校验规则
                        { required: true, message: "样本号必填" }
                    ],
                    component: {
                        props: {
                            clearable: true
                        },
                        placeholder: "请输入项目"
                    },
                    itemProps: {
                        class: { yxtInput: true }
                    }
                }
            },
            {
                title: "项目号",
                key: "project_id",
                sortable: true,
                type: "select",
                dict: {
                    cache: true,
                    isTree: true,
                    url: '/api/projects/',
                    value: 'id', // 数据字典中value字段的属性名
                    label: 'name' // 数据字典中label字段的属性名
                  },
                form: {
                    component: 'el-select' ,
                    rules: [
                        // 表单校验规则
                        { required: true, message: "项目号必填" }
                    ],
                    component: {
                        props: {
                            clearable: true
                        },
                        placeholder: "请输入项目号"
                    },
                    itemProps: {
                        class: { yxtInput: true }
                    }
                },

            },
            
        ].concat(vm.commonEndColumns())
    };
};