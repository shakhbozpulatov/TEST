<template>
  <div class="home p-4">
    <div class="search-bar flex justify-between">
      <SearchBar />
      <button
        @click="openModal"
        class="flex items-center px-2 gap-2 bg-blue-500 rounded-lg"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6247 3.3335C10.6247 2.98832 10.3449 2.7085 9.99967 2.7085C9.6545 2.7085 9.37467 2.98832 9.37467 3.3335L9.37467 9.37516H3.33301C2.98783 9.37516 2.70801 9.65498 2.70801 10.0002C2.70801 10.3453 2.98783 10.6252 3.33301 10.6252H9.37467V16.6668C9.37467 17.012 9.6545 17.2918 9.99967 17.2918C10.3449 17.2918 10.6247 17.012 10.6247 16.6668V10.6252H16.6663C17.0115 10.6252 17.2913 10.3453 17.2913 10.0002C17.2913 9.65498 17.0115 9.37516 16.6663 9.37516H10.6247L10.6247 3.3335Z"
            fill="#FAFAFA"
          />
        </svg>
        <p class="text-white text-sm m-0">Buyurtma qo'shish</p>
      </button>
      <el-dialog v-model="dialogVisible" title="Mijoz qo'shish" width="50%">
        <form>
          <div class="row">
            <div class="col-md-6 mb-3 flex flex-col">
              <label class="font-semibold" for="fullname">Mijoz ismi</label>
              <el-select
                v-model="customer_name"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in clientStore.clientData"
                  :key="item.fullname"
                  :label="item.fullname"
                  :value="item.fullname"
                />
              </el-select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="font-semibold" for="fullname"
                >Buyurtma sanasi</label
              >
              <el-date-picker
                v-model="order_date"
                type="date"
                placeholder="DD/MM/YYYY"
                size="large"
                format="DD/MM/YYYY"
                value-format="DD/MM/YYYY"
                class="w-100"
              />
            </div>
            <div class="col-md-6 flex flex-col">
              <label class="font-semibold" for="fullname">Mahsulotlar</label>
              <el-select
                v-model="product"
                multiple
                size="large"
                placeholder="Select"
              >
                <el-option
                  v-for="item in clientStore.products"
                  :key="item.product"
                  :label="item.product"
                  :value="item.price"
                >
                  <span style="float: left">{{ item.product }}</span>
                  <span
                    style="
                      float: right;
                      color: var(--el-text-color-secondary);
                      font-size: 13px;
                    "
                    >{{ item.price }} so'm</span
                  >
                </el-option>
              </el-select>
            </div>
            <div class="col-md-6 flex items-endd">
              <h5>Price:</h5>
              <h5>{{ summa }}</h5>
            </div>
          </div>
        </form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="submitClientDataBtn">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="table-wrap">
      <table class="table bg-white rounded-lg mt-4 w-100">
        <tr class="th-row bg-blue-500 rounded-lg">
          <th class="p-3 text-white">N</th>
          <th class="p-2 text-white">Buyurtmachi</th>
          <th class="p-2 text-white">Xarid sanasi</th>
          <th class="p-2 text-white">Mahsulotlar</th>
          <th class="p-2 text-white">Buyurtma narxi</th>
          <th></th>
        </tr>
        <tr
          class="td-row p-2"
          v-for="(elem, index) in clientStore.orders"
          :key="index"
        >
          <td class="p-3">{{ index + 1 }}</td>
          <td class="p-2">{{ elem.customer_name }}</td>
          <td class="p-2">{{ elem.order_date }}</td>
          <td class="p-2">{{ elem.product }}</td>
          <td class="p-2">{{ elem.order_price }} so'm</td>
          <td class="td-data">
            <el-dropdown trigger="click">
              <el-button
                style="transform: rotate(-90deg)"
                :icon="More"
                circle
                class="more-btn"
              />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="editClient(elem.id, index)"
                    :icon="Edit"
                  >
                    Edit
                  </el-dropdown-item>
                  <el-dropdown-item
                    @click="deleteCLient(elem.id, index)"
                    style="color: #423433"
                    ><el-icon> <Delete color="#ee2d2d" /> </el-icon>
                    <p class="m-0" style="color: #ee2d2d">
                      Delete
                    </p></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import { Delete, Edit, More } from "@element-plus/icons-vue";
import { useClientStore } from "../store/clients.js";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { computed } from "@vue/reactivity";
import { toast } from "vue3-toastify";
import { v4 as uuidv4 } from "uuid";

let clientStore = useClientStore();

const customer_name = ref("");
const product = ref([]);
const order_price = ref("");
const order_date = ref("");

let dialogVisible = ref(false);
let isEditBtn = ref(false);
let clientIndex = ref(null);

const calculatePrice = function () {
  let summa = ref(0);
  product.value.forEach((elem) => {
    summa.value += elem;
  });
  return summa.value;
};
const summa = ref(calculatePrice());

const openModal = function () {
  customer_name.value = null;
  product.value = null;
  order_date.value = null;
  order_price.value = null;
  dialogVisible.value = true;
  isEditBtn.value = false;
};
const submitClientDataBtn = function () {
  if (!isEditBtn.value) {
    if (customer_name.value && order_date.value) {
      clientStore.clientData.push({
        id: uuidv4(),
        customer_name: customer_name.value,
        product: address.value,
        order_date: order_date.value,
        order_price: order_price.value,
      });
      dialogVisible.value = false;
      toast.success("Muvaqqiyatli qo'shildi");
      fullname.value = "";
      address.value = "";
      order_date.value = "";
      order_price.value = "";
    } else {
      toast.info("Barcha maydonlarni to'ldirish kere");
    }
  } else {
    clientStore.clientData[clientIndex.value].fullname = fullname.value;
    clientStore.clientData[clientIndex.value].order_date = order_date.value;
    clientStore.clientData[clientIndex.value].address = address.value;
    clientStore.clientData[clientIndex.value].order_price = order_price.value;

    dialogVisible.value = false;
    toast.success("Yangilandi");
  }
};
const deleteCLient = function (id, index) {
  ElMessageBox.confirm("Aminmisiz?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  })
    .then(() => {
      clientStore.clientData.forEach((elem) => {
        if (elem.id == id) {
          clientStore.clientData.splice(index, 1);
          ElMessage({
            type: "success",
            message: "Delete completed",
          });
        }
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
};
const editClient = function (id, index) {
  dialogVisible.value = true;
  isEditBtn.value = true;
  clientIndex.value = index;
  clientStore.clientData.forEach((elem) => {
    if (elem.id == id) {
      fullname.value = elem.fullname;
      order_price.value = elem.order_price;
      address.value = elem.address;
      order_date.value = elem.order_date;
    }
  });
};
</script>

<style lang="scss" scoped>
.table > :not(caption) > * > * {
  border-bottom-width: 0;
}
</style>
