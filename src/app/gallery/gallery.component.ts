import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  photos = [
    { url: '../../assets/images/Mahavir-Swami-Wallpaper-HD-Quality.jpg', title: 'Photo 1' },
    { url: '../../assets/images/images.jpg', title: 'Photo 2' },
    { url: '../../assets/images/main-image.jpg', title: 'Photo 3' },
    // { url: '../../assets/images/Mahavir-Swami-Wallpaper-HD-Quality.jpg', title: 'Photo 4' },
    // { url: '../../assets/images/Mahavir-Swami-Wallpaper-HD-Quality.jpg', title: 'Photo 5' },
    // { url: '../../assets/images/Mahavir-Swami-Wallpaper-HD-Quality.jpg', title: 'Photo 6' },
    // Add more photos as needed
  ];
}
