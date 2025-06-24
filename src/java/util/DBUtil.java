package util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {

    public static Connection getConnection() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(
            "jdbc:mysql://mainline.proxy.rlwy.net:31869/railway?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC", "root", "imsdAgIUZwcdPfXZlfPXuxfnHffdyblU");
    }
}
