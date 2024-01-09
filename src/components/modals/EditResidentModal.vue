<template>
    <div class="modal fade" id="editResidentModal" tabindex="-1" aria-labelledby="editResidentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="editResidentModalLabel">Thay đổi thông tin cư dân</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <EditResidentView />
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button> -->
                    <button type="submit" class="btn btn-primary">Cập nhật</button>
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
import EditResidentView from '@/views/admin/form/EditResidentView.vue';
</script>