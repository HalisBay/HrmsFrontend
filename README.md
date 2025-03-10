![Screenshot 2021-09-03 124420](https://user-images.githubusercontent.com/77541788/131985802-ab9fd2ba-c899-4205-be67-2b5877e271e4.jpg)
# HRMS Frontend

**HRMS Frontend** projesi, İnsan Kaynakları Yönetim Sistemi (HRMS) uygulamasının kullanıcı arayüzünü geliştirmek için React kullanılarak yazılmıştır. Bu proje, iş gücü yönetimini kolaylaştırmak için kullanıcı dostu bir platform sunmaktadır. Frontend, Spring Boot tabanlı backend ile iletişim kurarak veri yönetimi sağlar.

## Özellikler

- Kullanıcı girişi ve kaydı
- Çalışan bilgileri yönetimi
- İş pozisyonları ve başvuru yönetimi
- İzinler ve tatil yönetimi
- Modern ve responsive kullanıcı arayüzü

## Kullanılan Teknolojiler

- **React**: Frontend geliştirme
- **React Router**: Sayfa yönlendirme
- **Axios**: Backend ile API iletişimi
- **Bootstrap**: UI bileşenleri ve responsive tasarım
- **Redux** (Opsiyonel): Uygulama durumu yönetimi (Eğer kullanıldıysa)

## Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Bu repository'yi klonlayın:
    ```bash
    git clone https://github.com/HalisBay/HrmsFrontend.git
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    cd HrmsFrontend
    npm install
    ```

3. Uygulamayı çalıştırın:
    ```bash
    npm start
    ```

   Bu komut, uygulamayı `http://localhost:3000` adresinde başlatacaktır.

## Backend

Frontend, **[HRMS Backend](https://github.com/HalisBay/HRMS)** ile entegre olarak çalışır. Backend uygulaması, kullanıcı doğrulama, veri yönetimi ve diğer işlevleri sağlar.

