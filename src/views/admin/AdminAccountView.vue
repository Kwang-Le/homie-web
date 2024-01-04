<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
    <main>
        <div class="row">
            <div class="col-8">
                <Card>
                    <div class="row">
                        <div class="col-3">
                            <!-- profile pic and name -->
                        </div>

                        <div class="col-4">
                            <!-- personal info -->
                        </div>

                        <div class="col-4">
                            <!-- apartment-related info -->
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col-4">
                <Card>
                    <h5 class="card-title font-weight-bold">Người sống cùng</h5>
                    <Card>
                        <!-- DetailsCard -->
                    </Card>
                </Card>
            </div>
        </div>
    </main>
</template>
