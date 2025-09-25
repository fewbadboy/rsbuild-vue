<template>
  <div class="h-main">
    <Card>
      <Form
        layout="inline"
        autocomplete="off"
        class="w-full"
        :model="bookModel"
      >
        <FormItem label="书名" name="name">
          <Input v-model:value="bookModel.name" placeholder="请输入书名">
            <template #suffix>
              <Tooltip title="提示信息">
                <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
              </Tooltip>
            </template>
          </Input>
        </FormItem>
        <FormItem class="operation">
          <Space>
            <Button type="primary">搜索</Button>
            <Button>清空</Button>
          </Space>
        </FormItem>
      </Form>
    </Card>
    <Card>
      <Table
        bordered
        size="small"
        :loading="tableState.loading"
        :row-key="(record) => record.id"
        :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: (selectedRowKeys: Key[]) => { tableState.selectedRowKeys = selectedRowKeys } }"
        :columns="columns" 
        :data-source="dataTable" 
        :pagination="paginationConfig"
        :scroll="{ y: 600 }"
        @change="handleFilter"
      >
        <template #headerCell="{ column }">
          <span v-if="column.dataIndex === 'name'">
            {{ column.title }} <InfoCircleOutlined />
          </span>
        </template>
        <template #bodyCell="{ text, column, record  }">
          <template v-if="column.key === 'gender'">
            {{  text === 0 ? '女' : '男' }}
          </template>
          <template v-if="column.key === 'operation'">
            <Space>
              <Button type="link">
                <template #icon><EditOutlined /></template>
              </Button>
              <Popconfirm title="确定删除？" @confirm="handleDelete(record)">
                <Button type="link" danger>
                  <template #icon><DeleteOutlined /></template>
                </Button>
              </Popconfirm>
            </Space>
          </template>
        </template>
        <template #title>Table Header</template>
        <template #footer>Table Footer</template>
      </Table>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { 
  Button, 
  Card, 
  Form, 
  FormItem, 
  Input, 
  Table, 
  Tooltip, 
  Space, 
  Popconfirm, 
  type TableColumnType, 
  type PaginationProps, 
  type TableProps,  
} from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/table/interface';
import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

type SearchForm = {
  name: string
}
const tableState = reactive<{
  loading: boolean,
  selectedRowKeys: Key[]
}>({
  loading: false,
  selectedRowKeys: []
})
const bookModel = reactive<SearchForm>({
  name: '',
})

const paginationConfig = reactive<PaginationProps>({
  total: 11,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (t) => `总共 ${t} 项`
})

const columns: TableColumnType[]  = [
  { dataIndex: 'name', key: 'name', title: '书名', resizable: true, sorter: true, defaultSortOrder: 'descend' },
  { dataIndex: 'publisher', key: 'publisher', title: '出版社' },
  { dataIndex: 'author', key: 'author', title: '作者', colSpan: 2 },
  { dataIndex: 'phone', key: 'phone', title: '联系方式', colSpan: 0 },
  { dataIndex: 'gender', key: 'gender', title: '性别', width: 80, filters: [{ text: '女', value: 0 }, { text: '男', value: 1 }] },
  { dataIndex: 'description', key: 'description', title: '介绍', ellipsis: true },
  { key: 'operation', title: '操作', width: 180, fixed: 'right' }
]

const dataTable = [
  { id: 1, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 0, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 2, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 3, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 4, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 5, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 6, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 7, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 8, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 9, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
  { id: 10, name: 'ECMAScript' , publisher: 'ECMA 技术委员会 39', author: 'TC 39', phone: '18920252025', gender: 1, description: 'ECMAScript 的规范是 JavaScript 的基础，它描述了语言的核心功能，包括语法、类型、对象、语句、关键字等。TC39 定期发布 ECMAScript 的新版本，通常每年发布一次新的标准（如 ES6、ES7 等）。' },
]

const handleFilter: TableProps['onChange'] = (pagination, filters, sorter) => {
  tableState.loading = true
  console.log(pagination, filters, sorter)
  setTimeout(() => {
    tableState.loading = false
  }, 2000)
}

function handleDelete(record: Record<string, any> ) {
  console.log(record)
  console.log(tableState.selectedRowKeys)
}
</script>

