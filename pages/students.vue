<template>
  <main class="app-content">
    <div class="app-title">
      <div>
        <h1><i class="fa fa-dashboard" /> Öğrenci Yönetimi</h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg" />
        </li>
        <li class="breadcrumb-item">
          <a href="#">Öğrenci Yönetimi</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="widget-small danger coloured-icon">
          <i class="icon fa fa-star fa-3x" />
          <div class="info">
            <h4>Aktif Öğrenci Sayısı</h4>
            <p><b>50</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x" />
          <div class="info">
            <h4>Pasif Öğrenci Sayısı</h4>
            <p><b>10</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="table-responsive">
              <table id="sampleTable" class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Adı</th>
                    <th>Soyad</th>
                    <th>E-Posta</th>
                    <th>Paket</th>
                    <th>Soru Sayısı</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atilla</td>
                    <td>Pehlivan</td>
                    <td>web.atillapehlivan@gmail.com</td>
                    <td>YDS Paketi</td>
                    <td>2000 Soru</td>
                    <td>
                      <button class="btn btn-primary wd-100p" type="button">
                        İşlem Yap
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Alper</td>
                    <td>Demirel</td>
                    <td>alperdemirelceng@gmail.com</td>
                    <td>TOEFL Paketi</td>
                    <td>5000 Soru</td>
                    <td>
                      <button class="btn btn-primary wd-100p" type="button">
                        İşlem Yap
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  middleware: 'auth',
  loading: {
    color: 'red',
    height: '15px'
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
