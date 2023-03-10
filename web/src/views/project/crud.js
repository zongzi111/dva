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
                title: "项目名称",
                key: "name",
                sortable: true,
                treeNode: true,

                type: "input",
                form: {
                    rules: [
                        // 表单校验规则
                        { required: true, message: "项目名称必填" }
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
                key: "project_no",
                sortable: true,
                type: "input",
                form: {
                    
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
                }
            },
        ].concat(vm.commonEndColumns())
    };
};