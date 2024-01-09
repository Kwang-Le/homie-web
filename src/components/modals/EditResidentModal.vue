<!-- EditResidentModal.vue -->
<template>
    <div class="modal fade" id="editResidentModal" tabindex="-1" aria-labelledby="editResidentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editResidentModalLabel">Edit Resident</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <EditResidentView />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import EditResidentView from '@/views/admin/form/EditResidentView.vue';
</script>