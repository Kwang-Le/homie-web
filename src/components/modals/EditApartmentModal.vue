<template>
    <div class="modal fade" id="editApartmentModal" tabindex="-1" aria-labelledby="editApartmentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="editApartmentModalLabel">Thay đổi thông tin căn hộ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <EditApartmentView />
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button> -->
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-header,
.modal-footer {
    border: none;
}

.modal-content {
    /* padding:  */
    background-color: var(--background-screen);
    border: 2px solid var(--main-secondary);
}

.modal-title {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 1000 30px/150% Inter, sans-serif;
    text-align: center;
}

.modal-footer {
    justify-content: center;
}

.btn-primary {
    width: 50%;
    height: 44px;
    color: var(--text-alternative);
    letter-spacing: -0.19px;
    white-space: nowrap;
    font: 800 16px/150% Inter, sans-serif;
    text-align: center;
}

</style>
  
<script setup>
import EditApartmentView from '@/views/admin/form/EditApartmentView.vue';
</script>