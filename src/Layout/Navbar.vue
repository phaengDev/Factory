<template lang="">
   <!-- BEGIN #sidebar -->
		<div id="sidebar" class="app-sidebar" data-bs-theme="dark">
			<!-- BEGIN scrollbar -->
			<div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
				<!-- BEGIN menu -->
				<div class="menu">
					<div class="menu-profile">
						<a href="javascript:;" class="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
							<div class="menu-profile-cover with-shadow"></div>
							<div class="menu-profile-image">
								<img src="../assets/img/user/user-13.jpg" alt="" />
							</div>
							<div class="menu-profile-info">
								<div class="d-flex align-items-center">
									<div class="flex-grow-1">
										Sean Ngu
									</div>
									<div class="menu-caret ms-auto"></div>
								</div>
								<small>Frontend developer</small>
							</div>
						</a>
					</div>
					<div id="appSidebarProfileMenu" class="collapse">
						<div class="menu-item pt-5px">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-cog"></i></div>
								<div class="menu-text">Settings</div>
							</a>
						</div>
						<div class="menu-item">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-pencil-alt"></i></div>
								<div class="menu-text"> Send Feedback</div>
							</a>
						</div>
						<div class="menu-item pb-5px">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-question-circle"></i></div>
								<div class="menu-text"> Helps</div>
							</a>
						</div>
						<div class="menu-divider m-0"></div>
					</div>
					<div class="menu-header">ເມນູ</div>
					<div class="menu-item fs-5">
					<router-link to="/" class="menu-link">
					<div class="menu-icon">
					<i class="fas fa-home"></i>
					</div>
					<div class="menu-text">ໜ້າຫຼັກ </div>
					</router-link>
					</div>
					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-cart-plus"></i></div>
							<div class="menu-text">ຈັດການຂາຍ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ລົງທະບຽນລູກຄ້າ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ອອກໃບບິນຂາຍ</div></router-link>
							</div>
						</div>
					</div>
					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-file-pen"></i></div>
							<div class="menu-text">ການຈັດການສິນຄ້າ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ອອກໃບສັ່ງຊື້ວັດຖຸດີບ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ເບີກວັດຖຸດີບເຂົ້າໂຮງຜະລິດ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/model" class="menu-link"><div class="menu-text">ນຳເຂົ້າບັນຈຸສຳເລັດຮູບ</div></router-link>
							</div>
						</div>
					</div>
					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-layer-group"></i></div>
							<div class="menu-text">ສາງສິນຄ້າ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ສາງວັດຖຸດີບ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ສາງສິນຄ້າສຳເລັດຮູບ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/model" class="menu-link"><div class="menu-text">ລ໊ອດການຜະລິດ</div></router-link>
							</div>
						</div>
					</div>

					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-list"></i></div>
							<div class="menu-text">ລາຍງານ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ລາຍງານການຂາຍ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ລາຍງານນຳເຂົ້າ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/model" class="menu-link"><div class="menu-text">ລາຍງານການສັ່ງຊື້</div></router-link>
							</div>
						</div>
					</div>

					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-sliders"></i></div>
							<div class="menu-text">ການຕັ້ງຄ່າການຜະລິດ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ປະເພດວັດຖຸດີບ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ອົງປະກອບການປຜະລິດ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/model" class="menu-link"><div class="menu-text">ຫົວໜ່ວຍການບັນຈຸ</div></router-link>
							</div>
						</div>
					</div>
					<div class="menu-item has-sub fs-5">
						<a href="javascript:void(0);" class="menu-link">
							<div class="menu-icon"><i class="fa-solid fa-gear"></i></div>
							<div class="menu-text">ການຕັ້ງຄ່າ</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu fs-14px">
							<div class="menu-item">
								<router-link to="/model" class="menu-link"><div class="menu-text">ສາງສະຕ໋ອກສິນຄ້າ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/company" class="menu-link"><div class="menu-text">ພະແນກ</div></router-link>
							</div>
							<div class="menu-item">
								<router-link to="/type" class="menu-link"><div class="menu-text">ຜູ້ໃຊ້ລະບົບ</div></router-link>
							</div>
							
						</div>
					</div>
					
					<!-- BEGIN minify-button -->
					<div class="menu-item d-flex">
						<a href="javascript:;" class="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none" data-toggle="app-sidebar-minify"><i class="fa fa-angle-double-left"></i></a>
					</div>
					<!-- END minify-button -->
				</div>
				<!-- END menu -->
			</div>
			<!-- END scrollbar -->
		</div>
		<div class="app-sidebar-bg" data-bs-theme="dark"></div>
		<div class="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" class="stretched-link"></a></div>
		<!-- END #sidebar -->
		
</template>
<script>
export default {

}
</script>
<style lang="">

</style>